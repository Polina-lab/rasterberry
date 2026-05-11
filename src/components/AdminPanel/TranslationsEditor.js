const TranslationsEditor = () => {
    const { language, setLanguage } = useLanguage();
    const [translations, setTranslations] = useState({});
  
    const handleChange = (e) => {
      setTranslations({
        ...translations,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSave = () => {
      // Отправка данных на сервер для сохранения
    };
  
    return (
      <div>
        <h3>Edit Translations</h3>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="et">Eesti</option>
        </select>
        <form>
          <div>
            <label>Header</label>
            <input
              type="text"
              name="header"
              value={translations.header || ""}
              onChange={handleChange}
            />
          </div>
          {/* Добавьте поля для всех других переводов */}
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
      </div>
    );
  };
  