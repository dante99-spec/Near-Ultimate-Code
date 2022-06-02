import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    render() {
      
        return (
          <div className="home-footer">
            <p>&copy; 2022 HoangQuocViet. More information. <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">&#8594; Click here &#8592;</a></p>
             </div>
        )
    }
}
   



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
