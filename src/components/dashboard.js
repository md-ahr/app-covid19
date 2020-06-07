import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from './dataTable';

const Dashboard = () => {

    const [ items, setItems ] = useState({
        cases: '',
        deaths: '',
        recovered: '',
        critical: '',
        todayCases: '',
        todayDeaths: '',
        todayActive: '',
        casesPerOneMillion: '',
        deathsPerOneMillion: '',
        testsPerOneMillion: '',
        totalTests: ''
    });

    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const getTotalCount = async () => {
            const res = await axios('https://coronavirus-19-api.herokuapp.com/countries/world');
            const data = res.data;
            setItems({
                cases: data.cases,
                deaths: data.deaths,
                recovered: data.recovered,
                critical: data.critical,
                todayCases: data.todayCases,
                todayDeaths: data.todayDeaths,
                todayActive: data.active,
                casesPerOneMillion: data.casesPerOneMillion,
                deathsPerOneMillion: data.deathsPerOneMillion,
                testsPerOneMillion: data.testsPerOneMillion,
                totalTests: data.totalTests
            });
            setLoading(false);
        };
        getTotalCount();
        setLoading(true);
    }, []);

    return (
        <div className="container text-center" id="dashboard">
            <div className="count__wrapper">
                <h1 className="count__wrapper--title text-uppercase">Covid-19 Live Update</h1>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="card count__wrapper--case">
                        <div className="card-header">Total Cases</div>
                        <div className="card-body">
                            { loading ? <span className="fa fa-spinner fa-spin"></span> : items.cases.toLocaleString() }
                        </div>
                    </div>
                    <div className="card count__wrapper--death ">
                        <div className="card-header">Total Deaths</div>
                        <div className="card-body">
                            { loading ? <span className="fa fa-spinner fa-spin"></span> : items.deaths.toLocaleString() }
                        </div>
                    </div>
                    <div className="card count__wrapper--recover">
                        <div className="card-header">Total Recovered</div>
                        <div className="card-body">
                            { loading ? <span className="fa fa-spinner fa-spin"></span> : items.recovered.toLocaleString() }
                        </div>
                    </div>
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
                                    <p className="text">In Mild Condition</p>
                                </div>
                                <div className="count__wrapper--critical">
                                    <p className="number mb-0">{ loading ? <span className="fa fa-spinner fa-spin"></span> : items.critical.toLocaleString() }</p>
                                    <p className="text">Serious or Critical</p>
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
                                    <p className="number mb-0">{ loading ? <span className="fa fa-spinner fa-spin"></span> : items.recovered.toLocaleString() }</p>
                                    <p className="text">Recovered / Discharged</p>
                                </div>
                                <div className="count__wrapper--gone">
                                    <p className="number mb-0">{ loading ? <span className="fa fa-spinner fa-spin"></span> : items.deaths.toLocaleString() }</p>
                                    <p className="text">Deaths</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DataTable />
            </div>
        </div>
    );

};

export default Dashboard;