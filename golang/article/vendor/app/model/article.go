package model

import (
	"app/shared/database"
	"log"
)

// Article table
type Article struct {
	ID         int    `db:"article_id"`
	CategoryID int    `db:"category_id"`
	Title      string `db:"article_title"`
	Content    string `db:"article_content"`
}

// ArticleGetOne : select singe data
func ArticleGetOne(id int) (Article, error) {
	var err error

	result := Article{}

	err = database.SQL.Get(&result,
		"SELECT article_id, article_title, article_content FROM article WHERE article_id=?", id)

	return result, err
}

// ArticleGet : get all data article
func ArticleGet(page int, limit int) ([]Article, error) {
	var err error

	var result []Article

	err = database.SQL.Select(&result, "SELECT article_id, article_title, article_content FROM article")

	return result, err
}

// ArticleCreate : insert data article
func ArticleCreate(data Article) (Article, error) {
	var err error
	log.Println("cat id")
	log.Println(data.CategoryID)
	res, err := database.SQL.Exec("INSERT INTO article (category_id, article_title, article_content) VALUES (?,?,?)",
		data.CategoryID, data.Title, data.Content)

	if err != nil {
		return data, err
	}

	lid, err := res.LastInsertId()
	id := int(lid)
	data.ID = id

	return data, err
}
