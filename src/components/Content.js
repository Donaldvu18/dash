import React, { Component } from 'react'
import './Content.css'
export default class Content extends Component {
    componentDidMount(){
     
  
      this.callClientBackendAPI()
      this.callFormSubmitted()
      this.callOrderProcess()
      this.callAwaitSig()
      this.callTotalOrders()
    }

    state={
      menudata:[],
      formsubmit:null,
      orderprocess:null,
      awaitsig:null,
      totalorders:null
  }

  callClientBackendAPI = (callback) => {

          fetch('/orders')
          .then(resp=>{
            // console.log(resp)
            return resp?resp.json():{}
          })
          .then(data=>{
              // const tempArray=data.recordset.map(dat=>({label:`${dat.last_name}, ${dat.first_name}`,value:dat}))
              // console.log(text)
              this.setState({menudata:data.recordset},()=>console.log(this.state.menudata))
              // callback(tempArray)   

              const script=document.createElement("script");
              script.src='/dist/js/content.js';
              script.async=true;
              document.body.appendChild(script);
          }).catch((error) => {
            console.log(error, "catch the hoop")

          });

      };    


      callFormSubmitted = (callback) => {

        fetch('/formsubmit')
        .then(resp=>{
          // console.log(resp)
          return resp?resp.json():{}
        })
        .then(data=>{
            this.setState({formsubmit:data.recordsets[0][0].cnt},()=>console.log(this.state.formsubmit))

        }).catch((error) => {
          console.log(error, "catch the hoop")

        });

    };   

    
    callOrderProcess = (callback) => {

      fetch('/orderprocess')
      .then(resp=>{
        // console.log(resp)
        return resp?resp.json():{}
      })
      .then(data=>{
          this.setState({orderprocess:data.recordsets[0][0].cnt},()=>console.log(this.state.orderprocess))

      }).catch((error) => {
        console.log(error, "catch the hoop")

      });

  };   



  callAwaitSig = (callback) => {

    fetch('/awaitsig')
    .then(resp=>{
      // console.log(resp)
      return resp?resp.json():{}
    })
    .then(data=>{
        this.setState({awaitsig:data.recordsets[0][0].cnt},()=>console.log(this.state.awaitsig))

    }).catch((error) => {
      console.log(error, "catch the hoop")

    });

};   

  callTotalOrders = (callback) => {

  fetch('/totalorders')
  .then(resp=>{
    // console.log(resp)
    return resp?resp.json():{}
  })
  .then(data=>{
      this.setState({totalorders:data.recordsets[0][0].cnt},()=>console.log(this.state.totalorders))

  }).catch((error) => {
    console.log(error, "catch the hoop")

  });

};   
    render() {
      const {menudata}=this.state
      const datamap=menudata.map(menudata=>{return(
        <tr>
          <td>{menudata.order_id}</td>
          <td>{menudata.order_date.slice(0,-5)}</td>
          <td>{menudata.rep_id}</td>
          <td>{menudata.account_number}</td>
          <td>{menudata.client_last_name}</td>
          <td>{menudata.client_first_name}</td>
          <td>{menudata.order_status}</td>
          <td>{menudata.event_id}</td>
          <td>{menudata.location}</td>
          <td>{menudata.subtotal}</td>
          <td>{menudata.discount}</td>
          <td>{menudata.total}</td>
          <td>{menudata.ra}</td>
          <td>{menudata.delivery_method}</td>
        </tr>
       )})   
        return (
         <div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    {/* <div className="content-wrapper"> */}
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
          {/* <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>/.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}                
   {/* Main content */}
<section className="content">
  <div className="container-fluid">
    {/* Small boxes (Stat box) */}
    <div className="row">
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-info">
          <div className="inner">
            <h3>{this.state.formsubmit}</h3>
            <p>Forms Submitted</p>
          </div>
          <div className="icon">
            <i className="ion ion-bag" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-success">
          <div className="inner">
            <h3>{this.state.awaitsig}</h3>
            <p>Forms Awaiting Signature</p>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div id='processbox' className="small-box bg-navy">
          <div className="inner">
            <h3>{this.state.orderprocess}</h3>
            <p>Orders Processed</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-danger">
          <div className="inner">
            <h3>{this.state.totalorders}</h3>
            <p>Total Orders</p>
          </div>
          <div className="icon">
            <i className="ion ion-pie-graph" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
    </div>
    
    {/* /.row */}
    {/* Main row */}
  </div></section>
  {/* </div> */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>All Orders Table</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="fake_url">Home</a></li>
              <li className="breadcrumb-item active">DataTables</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-12">
          <div className="card">
            {/* <div className="card-header">
              <h3 className="card-title">Contains all Suite Orders</h3>
            </div>
            <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" id='sea' type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form> */}
            {/* /.card-header */}
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>order_id</th>
                    <th>order_date</th>
                    <th>rep_id</th>
                    <th>account_number</th>
                    <th>client_last_name</th>
                    <th>client_first_name</th>
                    <th>order_status</th>
                    <th>event_id</th>
                    <th>location</th>
                    <th>subtotal</th>
                    <th>discount</th>
                    <th>total</th>
                    <th>ra</th>
                    <th>delivery_method</th>
                  </tr>
                </thead>             
                <tbody>
                  {datamap}
              
                </tbody>

                {/* <tfoot>
                  <tr>
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                  </tr>
                </tfoot> */}
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* <div className="card">
            <div className="card-header">
              <h3 className="card-title">DataTable with default features</h3>
            </div> */}
            {/* /.card-header */}
            {/* <div className="card-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td>X</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            {/* /.card-body */}
          {/* </div> */}
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}                
</div>

        )
    }
}
