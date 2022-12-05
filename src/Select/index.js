import "./style.css"


const Select = ({ currencies, currency, setCurrency }) => (
  <section>
    <label className="select__label">
      Wybierz walutę:
      <select
        className="select__currencyValue"
        name="currency"
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}
      >
        {currencies.map(currency => (
          <option
            key={currency.short}
            value={currency.short}
          >
            {currency.name}
          </option>
        ))};
      </select>
    </label>
  </section>
);

export default Select;