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

// ArticleUpdate edit data Article
func ArticleUpdate(w http.ResponseWriter, r *http.Request) {

	var params httprouter.Params
	params = context.Get(r, "params").(httprouter.Params)
	ID := params.ByName("id")
	i, err := strconv.Atoi(ID)

	ArticleID := int(i)

	decoder := json.NewDecoder(r.Body)
	var dataUpdate model.Article
	err = decoder.Decode(&dataUpdate)

	if err != nil {
		respond.With(w, r, http.StatusBadRequest, err.Error())
	} else {
		dataUpdate.ID = ArticleID

		err = model.ArticleUpdate(dataUpdate)

		if err != nil {
			respond.With(w, r, http.StatusBadRequest, err.Error())
		} else {

			respond.With(w, r, http.StatusOK, "SUCCES")
		}
	}

}

// ArticleDelete : delete article
func ArticleDelete(w http.ResponseWriter, r *http.Request) {
	var params httprouter.Params
	params = context.Get(r, "params").(httprouter.Params)
	i, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		respond.With(w, r, http.StatusBadRequest, "failed get id")
	} else {
		articleID := int(i)
		err := model.ArticleDelete(articleID)

		if err != nil {
			respond.With(w, r, http.StatusBadRequest, err.Error())
		} else {
			respond.With(w, r, http.StatusOK, "SUCCES")
		}
	}
}

// ArticleGetOne : get singe data
func ArticleGetOne(w http.ResponseWriter, r *http.Request) {
	var params httprouter.Params
	params = context.Get(r, "params").(httprouter.Params)
	i, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		respond.With(w, r, http.StatusBadRequest, "failed get id")
	} else {
		articleID := int(i)

		data, err := model.ArticleGetOne(articleID)

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
