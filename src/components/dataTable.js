import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DataTable = () => {

    const [ items, setItems ] = useState([]);

    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const getAllData = async () => {
            const res = await axios('https://coronavirus-19-api.herokuapp.com/countries');
            const data = res.data;
            setItems(...items, data);
            setLoading(false);
        };
        getAllData();
        setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="table-responsive count__wrapper--tbl mt-5">
            {loading ? <span className="text-loading">Please wait...</span> : 
            <table className="table table-bordered table-hover text-center">
                <thead className="bg-light">
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>New Cases</th>
                        <th>Total Deaths</th>
                        <th>New Deaths</th>
                        <th>Total Recovered</th>
                        <th>Active Cases</th>
                        <th>Critical Cases</th>
                        <th>Total Cases / 1M Pop</th>
                        <th>Total Deaths / 1M Pop</th>
                        <th>Total Tests</th>
                        <th>Total Tests / 1M Pop</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => (
                            <tr key={index} className={(item.active === 0 && item.deaths === 0) ? 'green' : ''}>
                                <td>{index}</td>
                                <td><Link to={"countries/"+item.country} target="_blank">{item.country.toLocaleString()}</Link></td>
                                <td>{item.cases.toLocaleString()}</td>
                                {(item.todayCases > 0) ? <td className="new-case">{item.todayCases.toLocaleString()}</td> : <td></td>}
                                {(item.deaths > 0) ? <td>{item.deaths.toLocaleString()}</td> : <td></td>}
                                {(item.todayDeaths > 0) ? <td className={item.todayDeaths > 0 ? 'new-death' : ''}>{item.todayDeaths.toLocaleString()}</td> : <td></td>}
                                {(item.recovered > 0) ? <td>{Number(item.recovered).toLocaleString()}</td> : <td>N/A</td>}
                                {(item.active > 0) ? <td>{Number(item.active).toLocaleString()}</td> : <td>N/A</td>}
                                {(item.critical > 0) ? <td>{item.critical.toLocaleString()}</td> : <td></td>}
                                {(item.casesPerOneMillion > 0) ? <td>{item.casesPerOneMillion.toLocaleString()}</td> : <td></td>}
                                {(item.deathsPerOneMillion > 0) ? <td>{item.deathsPerOneMillion.toLocaleString()}</td> : <td></td>}
                                {(item.totalTests > 0) ? <td>{item.totalTests.toLocaleString()}</td> : <td></td>}
                                {(item.testsPerOneMillion > 0) ? <td>{item.testsPerOneMillion.toLocaleString()}</td> : <td></td>}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            }
        </div>
    );

};

export default DataTable;