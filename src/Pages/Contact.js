

const Contact = () => {
    return (
      <form id="contactcontainer">
        <div>
        <legend className="cooltext">Let's Get Together</legend>
        </div>
        <div>
        <label>E-mail: </label>
        <input placeholder="you@where.com" size="20" required/>
        </div>
        <div>
        <label style={{float: "left"}}>Message: </label>
        <textarea placeholder="temporarily down! please message me on LinkedIn until fixed" rows="4" cols="20" required/>
        </div>
        <button variant="raised">Submit</button>
      </form>
    );
  }

export default Contact