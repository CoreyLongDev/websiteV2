

const Contact = () => {
    return (
      <form id="contactcontainer">
        <div>
        <legend className="cooltext">Let's Get Together</legend>
        </div>
        <div>
        <label>E-mail: </label>
        <input placeholder="you@where.com" required/>
        </div>
        <div>
        <label style={{float: "left"}}>Message: </label>
        <textarea placeholder="How can i help!" required/>
        </div>
        <button variant="raised">Submit</button>
      </form>
    );
  }

export default Contact