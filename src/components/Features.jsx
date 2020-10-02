import React from 'react';

function Features({ features }) {
  return (
    <div>
      {features.map((feature) => {
        return (
          <div key={feature.feature} className="ajs-feature">
            {feature.value ? <div /> : <img alt="" src="https://www.flaticon.com/svg/static/icons/svg/60/60731.svg"/>}
            <div className="ajs-feature-title">
              {feature.feature + ':'}
            </div>
            <div>
              {feature.value}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Features;
