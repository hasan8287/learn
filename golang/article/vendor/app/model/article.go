package model

import (
	"app/shared/database"
)

// Article table
type Article struct {
	ID           int    `db:"article_id"`
	CategoryID   int    `db:"category_id"`
	CategoryName string `db:"category_name"`
	Title        string `db:"article_title"`
	Content      string `db:"article_content"`
}

// ArticleUpdate update data Article
func ArticleUpdate(data Article) error {
	var err error

	_, err = database.SQL.Exec(
		"UPDATE article SET category_id=?, article_title=?, article_content=? WHERE article_id=? LIMIT 1",
		data.CategoryID, data.Title, data.Content, data.ID)

	return err
}

// ArticleDelete delete article by id
func ArticleDelete(id int) error {
	var err error
	_, err = database.SQL.Exec("DELETE FROM article WHERE article_id = ?", id)

	return err
}

// ArticleGetOne : select singe data
func ArticleGetOne(id int) (Article, error) {
	var err error

	result := Article{}

	err = database.SQL.Get(&result,
		"SELECT article.category_id, article_id, article_title, article_content, category.category_name FROM article LEFT JOIN category ON article.category_id=category.category_id WHERE article_id=?", id)

	return result, err
}

// ArticleGet : get all data article
func ArticleGet(page int, limit int) ([]Article, error) {
	var err error

	var result []Article

	err = database.SQL.Select(&result,
		"SELECT article.category_id, article_id, article_title, article_content, category.category_name FROM article LEFT JOIN category ON article.category_id=category.category_id ")

	return result, err
}

// ArticleCreate : insert data article
func ArticleCreate(data Article) (Article, error) {
	var err error

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
