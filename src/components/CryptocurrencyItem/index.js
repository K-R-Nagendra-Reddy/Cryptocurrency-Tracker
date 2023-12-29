// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, euroValue, id, usdValue} = details
  return (
    <li className="list-container">
      <div className="logo-coin">
        <img src={currencyLogo} alt={currencyName} className="currencyName" />
        <p className="color-item">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="color-item">{usdValue}</p>
        <p className="color-item">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
