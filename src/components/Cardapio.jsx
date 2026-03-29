function Cardapio() {
  return (
    <section id="cardapio" className="cardapio">

      <div className="container">

        <h2 className="section-title">
          Cardápio Destaque
        </h2>

        {/* ADICIONAMOS ESSA DIV */}
        <div className="menu">

          <div className="menu-grid">

            <div className="menu-item">
              <img
                src="espresso.jpeg"
                alt="Espresso Duplo"
              />
              <h3>Espresso Duplo</h3>
              <p>R$ 9,00</p>
            </div>

            <div className="menu-item">
              <img
                src="/caramelo.jpeg"
                alt="Latte de Caramelo"
              />
              <h3>Latte de Caramelo</h3>
              <p>R$ 16,00</p>
            </div>

            <div className="menu-item">
              <img
                src="/cold brew.jpeg"
                alt="Cold Brew"
              />
              <h3>Cold Brew 500ml</h3>
              <p>R$ 18,00</p>
            </div>

            <div className="menu-item">
              <img
                src="pao.jpeg"
                alt="Croissant"
              />
              <h3>Croissant de Amêndoa</h3>
              <p>R$ 14,00</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Cardapio