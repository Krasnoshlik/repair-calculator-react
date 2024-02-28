import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [range, setRahge] = useState(50);
  const [totalPrice, setTotalPrice] = useState(0);
  
  function handleChangeTotal() {
	setTotalPrice(range * 60);
  }

  useEffect(() => {
	handleChangeTotal();
  })

  return (
    <main className="calc-wrapper">
			<div className="container">
				<form id="form">
					<div className="heading">
						<h1 className="heading-title">Repair cost calculator</h1>
						<p className="heading-desc">Base price: 1 m² = 60€</p>
					</div>

					<div className="calc-section">
						<label className="checkbox-wrapper title-bold section-title .section-title--vertical-center">
							<span className="title__inline">Apartament size:</span>
							<input type="number" min="0" max="200" value={range} id="square-input" className="title__inline input-short" />
							<span className="title__inline">m²</span>
						</label>
						<input onChange={e => setRahge(e.target.value)} type="range" id="square-range" className="range-input" min="0" max="200" value={range} step="1" />
					</div>

					<div className="calc-section">
						<h4 className="checkbox-wrapper title-bold section-title">Repair type</h4>
						<label className="radio-wrapper" data-name="mobile">
							<input type="radio" className="radio" name="type" value='1'/>
							<div className="title-lite">Cosmetic</div>
						</label>
						<label className="radio-wrapper" data-name="mobile">
							<input type="radio" className="radio" name="type" value="1.3" />
							<div className="title-lite">
								Major
								<span className="note">+30% to price</span>
							</div>
						</label>
						<label className="radio-wrapper" data-name="mobile">
							<input type="radio" className="radio" name="type" value="1.5" />
							<div className="title-lite">
								Turnkey
								<span className="note">+50% to price</span>
							</div>
						</label>
					</div>

					<div className="calc-section">
						<label className="checkbox-wrapper title-bold section-title"> Apartament type </label>
						<label className="radio-wrapper">
							<input type="radio" className="radio" name="building" value="1"/>
							<div className="title-lite">New</div>
						</label>
						<label className="radio-wrapper">
							<input type="radio" className="radio" name="building" value="1.1" />
							<div className="title-lite">
								Second hand
								<span className="note">+10% to price</span>
							</div>
						</label>
					</div>

					<div className="calc-section">
						<label className="checkbox-wrapper title-bold section-title"> Rooms quantity </label>
						<div className="rooms-wrapper">
							<label className="rooms-label">
								<input className="rooms-radio-real" type="radio" name="rooms" value="0.8" />
								<span className="rooms-radio-fake">C</span>
							</label>

							<label className="rooms-label">
								<input className="rooms-radio-real" type="radio" name="rooms" value="1" />
								<span className="rooms-radio-fake">1</span>
							</label>

							<label className="rooms-label">
								<input className="rooms-radio-real" type="radio" name="rooms" value="1.02" />
								<span className="rooms-radio-fake">2</span>
							</label>

							<label className="rooms-label">
								<input className="rooms-radio-real" type="radio" name="rooms" value="1.05" />
								<span className="rooms-radio-fake">3</span>
							</label>

							<label className="rooms-label">
								<input className="rooms-radio-real" type="radio" name="rooms" value="1.1" />
								<span className="rooms-radio-fake">4</span>
							</label>

							<label className="rooms-label">
								<input className="rooms-radio-real" type="radio" name="rooms" value="1.15" />
								<span className="rooms-radio-fake">5</span>
							</label>
						</div>
					</div>

					<div className="calc-section">
						<label className="checkbox-wrapper title-bold section-title"> Bonus options </label>
						<label className="radio-wrapper">
							<input type="checkbox" className="radio" name="ceiling" value="1.1" />
							<div className="title-lite">
								Stretch ceiling
								<span className="note">+10% to price</span>
							</div>
						</label>
						<label className="radio-wrapper">
							<input type="checkbox" className="radio" name="walls" value="1.1" />
							<div className="title-lite">
								Wall painting
								<span className="note">+10% to price</span>
							</div>
						</label>
						<label className="radio-wrapper">
							<input type="checkbox" className="radio" name="floor" value="1.1" />
							<div className="title-lite">
								Underfloor heating
								<span className="note">+10% to price</span>
							</div>
						</label>
					</div>

					<div className="calc-price">
						<div className="calc-price-title">Final price:</div>
						<div className="calc-price-value">
							<span id="total-price">{totalPrice}</span>
							Euro
						</div>
					</div>
				</form>
			</div>
		</main>
  );
}

export default App;
