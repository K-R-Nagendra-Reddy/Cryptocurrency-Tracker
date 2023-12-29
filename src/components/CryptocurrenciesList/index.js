// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryprocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {coinsList: [], isLoading: true}

  componentDidMount() {
    this.searchCoinsList()
  }

  searchCoinsList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedList = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({coinsList: updatedList, isLoading: false})
  }

  displayCoinsList = () => {
    const {coinsList} = this.state
    return (
      <div className="coins-container">
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency"
        />
        <div className="table">
          <div className="table-header">
            <div className="usd-euro">
              <p className="color-item">Coin</p>
              <p className="color-item">Type</p>
            </div>

            <div className="usd-euro">
              <p className="color-item">USD</p>
              <p className="color-item">EURO</p>
            </div>
          </div>
          <ul className="table-items-container">
            {coinsList.map(each => (
              <CryprocurrencyItem key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="coins-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.displayCoinsList()
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
