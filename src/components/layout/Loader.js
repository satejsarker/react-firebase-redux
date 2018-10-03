import Loader from 'react-loader-spinner';

import React, { PureComponent } from 'react'

 class Loading extends PureComponent {
  render() {
    return (
      <div>
         <Loader style={{ margin: 'auto', display: 'block' }}
                    type="Rings"
                    color="#007bff"
                    height="200"
                    width='1000'
                    margin='auto'
                />
      </div>
    )
  }
}

export default Loading;
