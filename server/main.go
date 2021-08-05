package main

import (
	"flag"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"

	"github.com/armiantos/beartracks-v2/routes"
)

func initializeServer() *mux.Router {
	r := mux.NewRouter()

	apiRoutes := r.PathPrefix("/api/v1").Subrouter()
	routes.RegisterCourseRoutes(apiRoutes)

	return r
}

func main() {
	port := flag.Int("p", 80, "Port for server to listen to")

	flag.Parse()

	server := initializeServer()

	log.Infof("Server listening at port %d", *port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", *port), server))
}
