// import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",
  //결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "public"),
    // filename: "./main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/, //.scss 또는 .css 끝나는 파일들을 찾는 정규식
        use: [
          "style-loader", //css-loader가 읽은 내용을 index.html에 style 태그로 삽입을 해준다.
          "css-loader", // postcss에서 만들어진 css파일을 읽는다.
          "postcss-loader", // 해석된 scss파일을 가지고 공급업체 접두사를 제공을 한다, 그 외엔 postcss의 plugin들을 사용할 수 있다.
          "sass-loader", //scss 파일을 해석
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    //patterns 안에 있는 경로에 파일들을 복사하여 dist파일에 넣는다.
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  devServer: {
    host: "localhost",
  },
};
