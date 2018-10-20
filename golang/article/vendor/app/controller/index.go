package controller

import (
	"net/http"

	"gopkg.in/matryer/respond.v1"
)

// IndexGET displays the home page
func IndexGET(w http.ResponseWriter, r *http.Request) {
	respond.With(w, r, http.StatusForbidden, "Not Found")
}
