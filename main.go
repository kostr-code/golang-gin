package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "4Gi2u3p7"
	dbname   = "UniSearch"
)

type UNI struct {
	Name          string `json:"name"`
	ID            int    `json:"id"`
	Location      string `json:"location"`
	Established   string `json:"established"`
	Country       string `json:"country"`
	City          string `json:"city"`
	Main_language string `json:"main_language"`
	Avg_price     string `json:"avg_price"`
	Photo         string `json:"photo"`
}

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./client", true)))

	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
		api.GET("/uni", GetUni)
		api.POST("/jokes/like/:jokeID", LikeJoke)
	}

	router.Run(":3000")
}

func GetUni(c *gin.Context) {
	c.Header("Content-Type", "application/json")
	c.Header("Access-Control-Allow-Origin", "*")
	//data := OpenDB()

	var uni = []UNI{
		{Name: "ГУАП", ID: 1, Location: "not found", Established: "1941", Country: "Россия", City: "Санкт-Петербург", Main_language: "Русский", Avg_price: "100000", Photo: "/SUAI.jpg"},
		{Name: "ИТМО", ID: 2, Location: "not found", Established: "1985", Country: "Россия", City: "Санкт-Петербург", Main_language: "Русский", Avg_price: "200000", Photo: "/ITMO.jpg"},
		{Name: "ВШЭ", ID: 3, Location: "not found", Established: "1995", Country: "Россия", City: "Санкт-Петербург", Main_language: "Русский", Avg_price: "250000", Photo: "/HSE.jpg"},
		{Name: "ГУТ", ID: 4, Location: "not found", Established: "1937", Country: "Россия", City: "Санкт-Петербург", Main_language: "Русский", Avg_price: "135000", Photo: "/GUT.jpg"},
		{Name: "ГАУ", ID: 5, Location: "not found", Established: "1869", Country: "Россия", City: "Санкт-Петербург", Main_language: "Русский", Avg_price: "88000", Photo: "/GAU.jpg"},
		{Name: "ГЭУ", ID: 6, Location: "not found", Established: "1922", Country: "Россия", City: "Санкт-Петербург", Main_language: "Русский", Avg_price: "190000", Photo: "/GEU.jpg"},
	}

	// for data.Next() {
	// 	var row UNI
	// 	//log.Println(data)
	// 	if err := data.Scan(&row.Name, &row.ID, &row.Location, &row.Established, &row.Country, &row.City, &row.Main_language, &row.Avg_price, &row.Photo); err != nil {
	// 		log.Println("Есть несоответствия: ")
	// 		log.Println(err)
	// 	} else {
	// 		uni = append(uni, row)
	// 	}
	// }
	log.Println(uni)
	c.JSON(http.StatusOK, uni)
}

// LikeJoke increments the likes of a particular joke Item
func LikeJoke(c *gin.Context) {
	c.Header("Content-Type", "application/json")
	c.JSON(http.StatusOK, gin.H{
		"message": "LikeJoke handler not implemented yet",
	})
}

func OpenDB() *sql.Rows {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}

	rows, err := db.Query("SELECT * FROM \"Uni\"")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	//log.Println(rows.Next())
	return rows
}
