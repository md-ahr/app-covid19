import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = (props) => {

    const [ items, setItems ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const country = props.match.params.country;
        const getCountryData = async () => {
            const res = await axios(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
            const data = res.data;
            setItems(...items, data);
            setLoading(false);
        };
        getCountryData();
        setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="container text-center" id="country">
            <h1 className="title border-bottom pb-2">{ loading ? <span className="fa fa-spinner fa-spin"></span> : items.country }</h1>
            <div className="count__wrapper mt-4">
                <div className="count__wrapper--case">
                    <h3 className="count__wrapper--title">Total Cases</h3>
                    <p className="count__wrapper--number case">{ loading ? <span className="fa fa-spinner fa-spin"></span> : Number(items.cases).toLocaleString() }</p>
                </div>
                <div className="count__wrapper--death mt-4">
                    <h3 className="count__wrapper--title">Total Deaths</h3>
                    <p className="count__wrapper--number death">{ loading ? <span className="fa fa-spinner fa-spin"></span> : Number(items.deaths).toLocaleString() }</p>
                </div>
                <div className="count__wrapper--recover mt-4">
                    <h3 className="count__wrapper--title">Total Recovered</h3>
                    <p className="count__wrapper--number recover">{ loading ? <span className="fa fa-spinner fa-spin"></span> : Number(items.recovered).toLocaleString() }</p>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap mt-5">
                    <div className="card count__wrapper--active">
                        <div className="card-header">Active Cases</div>
                        <div className="card-body">
                            { loading ? <span className="fa fa-spinner fa-spin"></span> : (items.cases - items.recovered - items.deaths).toLocaleString() }
                            <p className="small-text">Currently Infected Patients</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="count__wrapper--mild">
                                    <p className="number mb-0">{ loading ? <span className="fa fa-spinner fa-spin"></span> : ((items.cases - items.recovered - items.deaths) - items.critical).toLocaleString() }</p>
                                    <p className="small-text">In Mild Condition</p>
                                </div>
                                <div className="count__wrapper--critical">
                                    <p className="number mb-0">{ loading ? <span className="fa fa-spinner fa-spin"></span> : Number(items.critical).toLocaleString() }</p>
                                    <p className="small-text">Serious or Critical</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card count__wrapper--closed">
                        <div className="card-header">Closed Cases</div>
                        <div className="card-body">
                            { loading ? <span className="fa fa-spinner fa-spin"></span> : (items.recovered + items.deaths).toLocaleString() }
                            <p className="small-text">Cases which had an outcome</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="count__wrapper--discharge">
                                    <p className="number mb-0">{ loading ? <span className="fa fa-spinner fa-spin"></span> : Number(items.recovered).toLocaleString() }</p>
                                    <p className="small-text">Recovered / Discharged</p>
                                </div>
                                <div className="count__wrapper--gone">
                                    <p className="number mb-0">{ loading ? <span className="fa fa-spinner fa-spin"></span> : Number(items.deaths).toLocaleString() }</p>
                                    <p className="small-text">Deaths</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive mt-5">
                { loading ? <span className="text-loading">Please wait...</span> :  
                <table className="table table-bordered text-left">
                    <tbody>
                        <tr>
                            <th className="bg-light">Country</th>
                            <td>{items.country}</td>
                        </tr>
                        <tr>
                            <th className="bg-light">Total Cases</th>
                            {(items.cases > 0) ? <td>{items.cases.toLocaleString()}</td> : <td></td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">New Cases</th>
                            {(items.todayCases > 0) ? <td>{items.todayCases.toLocaleString()}</td> : <td></td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">Total Deaths</th>
                            {(items.deaths > 0) ? <td>{items.deaths.toLocaleString()}</td> : <td></td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">New Deaths</th>
                            {(items.todayDeaths > 0) ? <td>{items.todayDeaths.toLocaleString()}</td> : <td></td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">Total Recovered</th>
                            {(items.recovered > 0) ? <td>{Number(items.recovered).toLocaleString()}</td> : <td>N/A</td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">Active Cases</th>
                            {(items.active > 0) ? <td>{Number(items.active).toLocaleString()}</td> : <td>N/A</td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">Critical Cases</th>
                            {(items.critical > 0) ? <td>{items.critical.toLocaleString()}</td> : <td></td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">Total Cases / 1M Pop</th>
                            {(items.casesPerOneMillion > 0) ? <td>{items.casesPerOneMillion.toLocaleString()}</td> : <td></td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">Total Deaths / 1M Pop</th>
                            {(items.deathsPerOneMillion > 0) ? <td>{items.deathsPerOneMillion.toLocaleString()}</td> : <td></td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">Total Tests</th>
                            {(items.totalTests > 0) ? <td>{items.totalTests.toLocaleString()}</td> : <td></td>}
                        </tr>
                        <tr>
                            <th className="bg-light w-25">Total Tests / 1M Pop</th>
                            {(items.testsPerOneMillion > 0) ? <td>{items.testsPerOneMillion.toLocaleString()}</td> : <td></td>}
                        </tr>
                    </tbody>
                </table>
                }
            </div>
        </section>
    );

}

export default Country;