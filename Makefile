build:
	@echo 'building docs files ...'
	vuepress build docs

run:
	vuepress dev docs
	@echo 'running vuepress to "http://localhost:8080/terraform-manage-guide/"'

rm_branch:
	git branch -D gh-pages

create_branch:
	git branch gh-pages

deploy:
	mv docs/.vuepress/dist/* ./

install_vuepress:
	npm i markdown-it-katex

.PHONY: create_branch rm_branch deploy
