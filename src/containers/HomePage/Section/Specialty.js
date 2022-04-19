import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import { getAllSpeialty } from '../../../services/userService'

import './Specialty.scss'
class Specialty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSpeciatly: []
        }
    }

    async componentDidMount() {
        let res = await getAllSpeialty()
        console.log('messi', res);
        if (res && res.errCode == 0) {
            this.setState({
                dataSpeciatly: res.data ? res.data : []
            })
        }
    }

    render() {
        let { dataSpeciatly } = this.state
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homepage.specialy-poplular" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-info" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {dataSpeciatly && dataSpeciatly.length > 0 &&
                                dataSpeciatly.map((item, index) => {
                                    return (
                                        <div className='section-customize specialty-child' key={index}>
                                            <div
                                                className='bg-image section-specialty '
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            ></div>
                                            <div className='specialty-name'>{item.name}</div>
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>
                </div >
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

export default connect(mapStateToProps)(Specialty);
