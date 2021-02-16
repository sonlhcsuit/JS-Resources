
## Git 
- Git là công cụ quản lý version (version control) của code để giúp ta kiểm tra được các phiên bản, ai đã sửa gì, chỗ nào, thành cái gì. Git giúp chúng ta có thể khôi phục lại code cũ lỡ chẳng may có gì xảy ra 

- Một project cần set up một git repository. Github là một online repository, cho phép đồng bộ git repository (local) với online repository (được lưu trữ ở server)

- branch: Nhánh, dùng để phát triển tính năng, khi nào phát triển xong thì merge lại vào nhánh chính 
- .gitignore: Dùng để lưu những file mà git không cần quan tâm đến version của chúng

- Lưu lại một version (một commit)
- Nhảy nhánh

## NodeJS
- Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Đơn giản hơn, JS chạy ở server thì cần có nodejs (runtime engine)

- NPM là chương trình quản lý thư viện (package manager) ngầm định trong môi trường Javascript Node.js. Bao gồm một trình gọi dòng lệnh (Command Line) từ máy khách Client với tên gọi là npm, và cơ sở dữ liệu trực tuyến chứa các gói public và private còn được gọi là npm registry. Npm registry được gọi từ npm client và trên web browser. Tất cả được quản lý trực tiếp từ NPM, inc.

- node_modules : chứa các file thư viện (rất nặng)

- package.json : metadata về node project

## setup 
```sh
$ npm install -g creat-react-app
$ create-react-app mindx-cijs
# npx create-react-app mindx-cijs
```

```sh
$ npm install -g firebase-tools
$ cd mindx-cijs
$ npm install --save firebase
```

- Lưu repository lên github 

Reference:  
* https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
* https://stackoverflow.com/questions/22424705/i-dont-understand-json-and-when-im-supposed-to-use-it-care-to-explain