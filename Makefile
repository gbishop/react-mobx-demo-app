deploy:
	npm run build
	rsync -a build/ login:public_html/react-mobx-demo-app/
