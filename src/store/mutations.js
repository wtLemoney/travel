export default {
  changeCity (state, city) {
    state.city = city
    localStorage.city = city // 解决刷新时城市还原的问题
  }
}
