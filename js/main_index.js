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
        <div className="title">
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
          return <span>추천</span>
        } 
      }      

      function showProducts() {
        return props.products.map((item, index) => {return (
          <figure className="productList">
            <div className="imgBlock">
              <img src={`../image/${item.name}.jpg`} alt={item.product} />
              <div class="productBtn">
                <span>
                  <button>장바구니</button>
                  <button>관심상품</button>
                </span> 
                <button>좋아요</button>
              </div>
            </div>                
            <figcaption>{item.product}</figcaption>
            <del>{item.del}</del>
            <ins>{item.ins}</ins>
            {isRecommended(item.recommend)}
          </figure>
        )})
      }

      return (
        <div className="content_wrap">
          {showProducts()}
        </div>
      )
    }
  }

  // export
  const box04 = document.querySelector("#box04")
  ReactDOM.render(
    <App />, box04
  )
})()