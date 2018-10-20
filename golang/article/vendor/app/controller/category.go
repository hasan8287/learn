package controller

import (
	"app/model"
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/context"
	"github.com/julienschmidt/httprouter"
	"gopkg.in/matryer/respond.v1"
)

// CategoryGetOne : display single data category
func CategoryGetOne(w http.ResponseWriter, r *http.Request) {
	var params httprouter.Params
	params = context.Get(r, "params").(httprouter.Params)
	i, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		respond.With(w, r, http.StatusBadRequest, "failed get id")
	} else {
		categotyID := int(i)

		data, err := model.CategoryGetOne(categotyID)

		if err != nil {
			respond.With(w, r, http.StatusBadRequest, err.Error())
		} else {
			respond.With(w, r, http.StatusOK, data)
		}

	}
}

// CategoryGet displays lsit category
func CategoryGet(w http.ResponseWriter, r *http.Request) {
	data, err := model.GetCategory()

	if err != nil {
		log.Println(err)
	}

	respond.With(w, r, http.StatusOK, data)
}

// CategoryPost create data category
func CategoryPost(w http.ResponseWriter, r *http.Request) {

	decoder := json.NewDecoder(r.Body)

	var dataInsert model.Category

	err := decoder.Decode(&dataInsert)

	if err != nil {
		panic(err)
	}

	data, err := model.CreateCategory(dataInsert)

	respond.With(w, r, http.StatusOK, data)

}

// CategoryDelete delete categori by id
func CategoryDelete(w http.ResponseWriter, r *http.Request) {
	var params httprouter.Params
	params = context.Get(r, "params").(httprouter.Params)
	categoryID := params.ByName("id")

	err := model.CategoryDelete(categoryID)

	if err != nil {
		respond.With(w, r, http.StatusBadRequest, err.Error())
	} else {
		respond.With(w, r, http.StatusOK, "SUCCES")
	}
}

// CategoryUpdate edit data category
func CategoryUpdate(w http.ResponseWriter, r *http.Request) {

	var params httprouter.Params
	params = context.Get(r, "params").(httprouter.Params)
	ID := params.ByName("id")
	i, err := strconv.Atoi(ID)

	categoryID := int(i)
	log.Println(categoryID)

	decoder := json.NewDecoder(r.Body)
	var dataUpdate model.Category
	err = decoder.Decode(&dataUpdate)

	if err != nil {
		respond.With(w, r, http.StatusBadRequest, err.Error())
	}

	// decoder.ID int64 = int64(categoryID)
	// var id int = strconv.Atoi("6")
	dataUpdate.ID = categoryID
	log.Println(dataUpdate)
	err = model.CategoryUpdate(dataUpdate)

	log.Println(err)
	if err != nil {
		respond.With(w, r, http.StatusBadRequest, err.Error())
	} else {

		respond.With(w, r, http.StatusOK, "SUCCES")
	}

}
