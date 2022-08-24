(function() {
  function App() {
    const [title, setTitle] = React.useState("꿀잠보장! 안고자면 세상포근")
    const [products, setProducts] = React.useState(window.data.productsByTitle["꿀잠보장! 안고자면 세상포근"])
    const titles = window.data.allTitle

    function handleTitleChange(selectedTitle) {
      const ableProducts = window.data.productsByTitle[selectedTitle]
      setProducts(ableProducts)
      setTitle(selectedTitle)
    }

    return (
      <>
        <Title title={title} titles={titles} handleTitleChange={handleTitleChange} />
        <Product products={products} />
      </>
    )

    // Title
    function Title(props) {
      function optionTitle() {
        return props.titles.map((item, index) => {return <option key={index} value={item}>{item}</option>})
      }

      function onTitleChange(e) {
        props.handleTitleChange(e.target.value)
      }

      return (
        <div className="titlePart">
          <h3 className="hide">상품목록</h3>
          <select id="title" defaultValue={props.title} onChange={onTitleChange}>
            {optionTitle()}
          </select> 
        </div>           
      )
    }

    // Product
    function Product(props) {
      function isRecommended(recommend) {
        if (recommend == true) {
          return <dd className="required">추천</dd>
        } 
      }      

      function showProducts() {
        return props.products.map((item, index) => {return (
          <li className="productWrap">
            <figure className="productList">
              <img src={`../image/${item.name}.jpg`} alt={item.product} />
              <figcaption>
                <dl>
                  <dt>{item.product}</dt>
                  <dd><del>{item.del}</del></dd>
                  <dd><ins>{item.ins}</ins></dd>
                  {isRecommended(item.recommend)}
                </dl>
              </figcaption>
            </figure>
            <ul class="productBtns">
              <li>
                <ul>
                  <li class="productBtn cart">장바구니</li>
                  <li class="productBtn heart">관심상품</li>
                </ul>
              </li>
              <li class="productBtn like">좋아요</li>
            </ul>
          </li>
        )})
      }

      return (
        <ul className="content_wrap">
          {showProducts()}
        </ul>
      )
    }
  }

  // export
  const box04 = document.querySelector("#box04")
  ReactDOM.render(
    <App />, box04
  )
})()