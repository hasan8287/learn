package main

import (
	"app/service"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func GetPeople(w http.ResponseWriter, r *http.Request) {
	people := service.DummyData()
	json.NewEncoder(w).Encode(people)
}

// our main function
func main() {
	router := mux.NewRouter()
	router.HandleFunc("/people", GetPeople).Methods("GET")
	log.Fatal(http.ListenAndServe(":8000", router))
}
