import React, { Component } from 'react'
import AddressContainer from '../../src/AddressContainer'
import CountrySelector from '../../src/CountrySelector'
import AddressForm from '../../src/AddressForm'
import AddressSummary from '../../src/AddressSummary'
import PostalCodeGetter from '../../src/PostalCodeGetter'
import AutoCompletedFields from '../../src/AutoCompletedFields'
import { DefaultInput, addValidation, removeValidation } from '../../src/index'
import GoogleMapsContainer from '../../src/geolocation/GoogleMapsContainer'
import GeolocationInput from '../../src/geolocation/GeolocationInput'
import Map from '../../src/geolocation/Map'

const ACCOUNT_NAME = 'qamarketplace'
const API_KEY = 'AIzaSyATLp76vkHxfMZqJF_sJbjQqZwvSIBhsTM'
const locale = 'pt'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shipsTo: [
        'BRA',
        'BOL',
        'CHL',
        'ECU',
        'PER',
        'ARG',
        'COL',
        'GTM',
        'MEX',
        'CAN',
        'ESP',
      ],
      address: addValidation({
        addressId: '10',
        addressType: 'residential',
        city: null,
        complement: null,
        country: 'BRA',
        geoCoordinates: [],
        neighborhood: null,
        number: null,
        postalCode: null,
        receiverName: null,
        reference: null,
        state: null,
        street: null,
        addressQuery: null,
      }),
      rules: {},
    }
  }

  componentDidMount() {
    this.loadCurrentCountryRules()
  }

  loadCurrentCountryRules = () => {
    const country = this.state.address.country.value
    const hasRulesLoaded = this.state.rules[country]

    if (hasRulesLoaded) {
      return
    }

    import('../../src/country/' + country).then(rules => {
      this.setState(prevState => ({
        rules: { ...prevState.rules, [country]: rules.default },
      }))
    })
  }

  handleAddressChange = address => {
    this.setState(prevState => ({
      address: {
        ...prevState.address,
        ...address,
      },
    }))
  }

  componentDidUpdate(_, prevState) {
    const countryChanged =
      this.state.address.country.value !== prevState.address.country.value

    if (countryChanged) {
      this.loadCurrentCountryRules()
    }
  }

  handleClickMaskedInfoIcon = e => {
    e.preventDefault()

    if (window && window.$) {
      window.$(window).trigger('showMessage.vtex', ['maskedInfo'])
    }
  }

  render() {
    const { shipsTo, address, rules } = this.state

    const country = address.country.value
    const selectedRules = rules[country]
    if (!selectedRules) {
      return <div>Loading...</div>
    }

    return (
      <div className="step" style={{ padding: '20px' }}>
        <div style={{ float: 'right', width: '50%' }}>
          <pre>
            <small>
              {JSON.stringify(address, null, 2)}
            </small>
          </pre>
        </div>
        <div>
          <AddressContainer
            accountName={ACCOUNT_NAME}
            address={address}
            rules={selectedRules}
            onChangeAddress={this.handleAddressChange}
          >
            {onChangeAddress =>
              (<div>
                <CountrySelector
                  Input={DefaultInput}
                  address={address}
                  shipsTo={shipsTo}
                  onChangeAddress={onChangeAddress}
                />

                <GoogleMapsContainer apiKey={API_KEY} locale={locale}>
                  {({ loading, googleMaps }) =>
                    (<div>
                      <GeolocationInput
                        loadingGoogle={loading}
                        googleMaps={googleMaps}
                        address={address}
                        rules={selectedRules}
                        onChangeAddress={onChangeAddress}
                      />

                      {address.geoCoordinates &&
                        address.geoCoordinates.valid &&
                        address.geoCoordinates.value.length === 2 &&
                        <Map
                          loadingGoogle={loading}
                          googleMaps={googleMaps}
                          geoCoordinates={address.geoCoordinates.value}
                          rules={selectedRules}
                          onChangeAddress={onChangeAddress}
                          mapProps={{
                            style: {
                              height: '120px',
                              marginBottom: '10px',
                              width: '260px',
                            },
                          }}
                        />}
                    </div>)}
                </GoogleMapsContainer>

                <PostalCodeGetter
                  Input={DefaultInput}
                  address={address}
                  rules={selectedRules}
                  onChangeAddress={onChangeAddress}
                />

                <AutoCompletedFields
                  address={address}
                  rules={selectedRules}
                  onChangeAddress={onChangeAddress}
                />

                <AddressForm
                  Input={DefaultInput}
                  address={address}
                  rules={selectedRules}
                  onChangeAddress={onChangeAddress}
                />
              </div>)}
          </AddressContainer>

          <hr />

          <AddressSummary
            address={removeValidation(address)}
            rules={selectedRules}
            onClickMaskedInfoIcon={this.handleClickMaskedInfoIcon}
          />
        </div>
      </div>
    )
  }
}

export default App
