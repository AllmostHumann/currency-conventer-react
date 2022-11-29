import "./style.css";
import { currencies } from "../Currency/index";
import { useState } from "react";

const Form = ({ result, calculatedResult, getResult }) => {

  const [exchangeAmount, setExchangeAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculatedResult(exchangeAmount, currency);
  };

  const onFormReset = () => {
    setExchangeAmount("");
    getResult("");
  };

  return (
    <form
      onSubmit={onFormSubmit}
      onReset={onFormReset}
    >
      <fieldset
        className="form__fieldset"
      >
        <legend
          className="form__legend"
        >
          Currency conventer
        </legend>
        <section
          className="form__label"
        >
          <label>
            Wpisz kwotę w PLN:
            <input
              className="form__amountValue"
              type="number"
              min="0.01"
              required step="0.01"
              placeholder="Pole wymagane"
              value={exchangeAmount}
              onChange={({ target }) => setExchangeAmount(target.value)}
            />
          </label>
        </section>
        <section
          className="form__label">
          <label>
            Wybierz walutę:
            <select
              className="form__currencyValue"
              name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map(currency => (
                <option
                  key={currency.id}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              ))};
            </select>
          </label>
        </section>
        <section
          className="form__label">
          <label>
            Otrzymasz:
            <strong
              className="form__resultValue"
            >
              {result}
            </strong>
          </label>
        </section>
        <div>
          <button
            className="form__Button"
            type="submit"
          >
            Przelicz
          </button>
          <button
            className="form__Button"
            type="reset"
          >
            Reset
          </button>
        </div>
        <section>
          <p>*Kursy walut pobrane z Narodowego Banku Polskiego.<br />
            Aktualne na dzień: <strong>2022-10-26</strong></p>
        </section>
      </fieldset>
    </form>
  );
}

export default Form;