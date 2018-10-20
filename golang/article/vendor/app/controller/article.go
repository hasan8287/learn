package controller

import (
	"app/model"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/context"
	"github.com/julienschmidt/httprouter"
	respond "gopkg.in/matryer/respond.v1"
)

type error interface {
	Error() string
}

// ArticleGetOne : get singe data
func ArticleGetOne(w http.ResponseWriter, r *http.Request) {
	var params httprouter.Params
	params = context.Get(r, "params").(httprouter.Params)
	i, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		respond.With(w, r, http.StatusBadRequest, "failed get id")
	} else {
		categotyID := int(i)

		data, err := model.ArticleGetOne(categotyID)

		if err != nil {
			respond.With(w, r, http.StatusBadRequest, err.Error())
		} else {
			respond.With(w, r, http.StatusOK, data)
		}

	}
}

// ArticleGet get data article
func ArticleGet(w http.ResponseWriter, r *http.Request) {

	page, err := strconv.Atoi(r.URL.Query().Get("page"))
	if err != nil {
		page = 1
	}

	limit, err := strconv.Atoi(r.URL.Query().Get("limit"))
	if err != nil {
		limit = 2
	}

	data, err := model.ArticleGet(page, limit)

	if err != nil {
		respond.With(w, r, http.StatusBadRequest, err.Error())
	} else {
		respond.With(w, r, http.StatusOK, data)
	}
}

// ArticlePost : create article
func ArticlePost(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)

	var dataInsert model.Article

	err := decoder.Decode(&dataInsert)

	if err != nil {
		respond.With(w, r, http.StatusBadRequest, err.Error())
	} else {
		data, err := model.ArticleCreate(dataInsert)

		if err != nil {
			respond.With(w, r, http.StatusBadRequest, err.Error())
		} else {
			respond.With(w, r, http.StatusOK, data)
		}
	}
}
