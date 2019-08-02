build:
	@echo 'building docs files ...'
	vuepress build docs

run:
	vuepress dev docs
	@echo 'running vuepress to "http://localhost:8080/terraform-manage-guide/"'

install_vuepress:
	npm i markdown-it-katex
