function Footer() {
  return (
    <footer className="footer p-5 bg-primary-focus text-neutral-content">
      <div>
        <div className="justify-center flex">
          <div className="w-40 rounded">
            <img src="http://getwell.co.id/wp-content/uploads/2021/07/logo.png" />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-flow-col text-white"></div>
        <p className="text-white">Kantor Pusat</p>
        <div className="justify-center flex">
          <div className="w-40 rounded">
            <img src="http://getwell.co.id/wp-content/uploads/2021/07/telmed_50.png" />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-flow-col text-white"></div>
        <p className="text-white">
          PT Telemdika Teknologi Indonesia
          <br />
          Jl.Arco Raya No.77 Cipete
          <br />
          Jakarta Selatan
        </p>
      </div>
    </footer>
  );
}

export default Footer;
