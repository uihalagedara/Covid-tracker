import React, {useState,useEffect} from 'react'



function Home() {

    const [datalist, setDatalist] = useState([{
        "success": true,
        "message": "Success",
        "data": {
            "update_date_time": "2020-03-17 08:14:26",
            "local_new_cases": 10,
            "local_total_cases": 29,
            "local_total_number_of_individuals_in_hospitals": 3,
            "local_deaths": 0,
            "local_recovered": 1,
            "global_new_cases": 13903,
            "global_total_cases": 167511,
            "global_deaths": 6606,
            "global_recovered": 862,
            "hospital_data": []
        }
    }])


    useEffect(() => {
        fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
            .then(response => response.json())
            .then(({ data: datalist }) => {
                setDatalist(datalist);
            });
    }, []);

    return (
        <div >
            <br/><br/>
            <center><h2 style={{color:'white'}}>Sri Lankan Covid19 stats</h2></center>
            <div className="row" style={{overflow:'visible', marginLeft:'30px'}}>
                <div className="col-sm-3">
                    <div className="card" style={{width:'300px', height:'200px', marginTop:'10px'}}>
                    <div className="card-body">
                    <center><h5 className="card-title">Total Number of Cases</h5>
                        <h1 className="card-text"  style={{color:'blue'}}>{datalist.local_total_cases}</h1> </center>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{width:'300px', height:'200px', marginTop:'10px'}}>
                    <div className="card-body">
                    <center><h5 className="card-title">Total Number of Deaths</h5>
                        <h1 className="card-text" style={{color:'red'}}>{datalist.local_deaths}</h1> </center>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{width:'300px', height:'200px', marginTop:'10px'}}>
                    <div className="card-body">
                    <center><h5 className="card-title">Total Number of Recovered</h5>
                        <h1 className="card-text" style={{color:'#00D100'}}>{datalist.local_recovered}</h1> </center>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{width:'300px', height:'200px', marginTop:'10px'}}>
                    <div className="card-body">
                    <center><h5 className="card-title">Total Number of new Cases</h5>
                        <h1 className="card-text" style={{color:'#ffd700'}}>{datalist.local_new_cases}</h1> </center>
                    </div>
                    </div>
                </div>
            </div>
            <br/><br/>

            
            <br/><br/>
            <center><h2 style={{color:'white'}}>Global Covid19 stats</h2></center>
            <div className="row" style={{overflow:'visible', marginLeft:'30px'}}>
                <div className="col-sm-3">
                    <div className="card" style={{width:'300px', height:'200px', marginTop:'10px'}}>
                    <div className="card-body">
                       <center><h5 className="card-title">Total Number of Cases</h5>
                        <h1 className="card-text"  style={{color:'blue'}}>{datalist.global_total_cases}</h1> </center>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{width:'300px', height:'200px', marginTop:'10px'}}>
                    <div className="card-body">
                       <center><h5 className="card-title">Total Number of Deaths</h5>
                        <h1 className="card-text"  style={{color:'red'}}>{datalist.global_deaths}</h1> </center>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{width:'300px', height:'200px', marginTop:'10px'}}>
                    <div className="card-body">
                       <center><h5 className="card-title">Total Number Recovered</h5>
                        <h1 className="card-text" style={{color:'#00D100'}}>{datalist.global_recovered}</h1> </center>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{width:'300px', height:'200px', marginTop:'10px'}}>
                    <div className="card-body">
                       <center><h5 className="card-title">Total Number of new Cases</h5>
                        <h1 className="card-text" style={{color:'#ffd700'}}>{datalist.global_new_cases}</h1> </center>
                    </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className="container">
            <iframe style={{width:"100%", height:"500px", frameborder:"2", marginTop:'30px'} } 
            src="https://covid19chart.org/#/?bare=1&start=%3E%3D50&include=WA%3BMA%3BNY%3BItaly&top=0&domain=Intl&theme=dark&advanced=1"></iframe>
            </div>

        </div>            
        
    )
}

export default Home
