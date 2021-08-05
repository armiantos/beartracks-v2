package routes

import (
	"github.com/armiantos/beartracks-v2/controllers"
	"github.com/gorilla/mux"
)

func RegisterCourseRoutes(router *mux.Router) {
	router.Methods("GET").HandlerFunc(controllers.FindCourse())
}
