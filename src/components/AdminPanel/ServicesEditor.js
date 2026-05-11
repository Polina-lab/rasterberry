const ServiceEditor = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ title: "", description: "", image: null });
  
    const handleChange = (e) => {
      setNewService({ ...newService, [e.target.name]: e.target.value });
    };
  
    const handleFileChange = (e) => {
      setNewService({ ...newService, image: e.target.files[0] });
    };
  
    const handleAddService = () => {
      // Отправка нового сервиса на сервер
    };
  
    return (
      <div>
        <h3>Edit Services</h3>
        <form>
          <div>
            <label>Service Title</label>
            <input type="text" name="title" value={newService.title} onChange={handleChange} />
          </div>
          <div>
            <label>Description</label>
            <textarea name="description" value={newService.description} onChange={handleChange}></textarea>
          </div>
          <div>
            <label>Image</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <button type="button" onClick={handleAddService}>Add Service</button>
        </form>
      </div>
    );
  };
  