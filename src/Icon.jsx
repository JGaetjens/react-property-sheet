import React, {Component, PropTypes} from 'react';
import Style from 'react-style-decorator';

@Style(require('style/useable!css!autoprefixer?browsers=last 4 version!font-awesome-animation/dist/font-awesome-animation.css'))
export class Icon extends Component {
  static displayName = 'Icon';
  static propTypes = {
    name: PropTypes.string.isRequired,
    prefix: PropTypes.string,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    rotate: PropTypes.oneOf(['90', '180', '270']),
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    fixedWidth: PropTypes.bool,
    spin: PropTypes.bool,
    stack: PropTypes.oneOf(['1x', '2x', '3x']),
    inverse: PropTypes.bool,
    className: PropTypes.any,
    wrench: PropTypes.bool,
    ring: PropTypes.bool,
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    flash: PropTypes.bool,
    bounce: PropTypes.bool,
    float: PropTypes.bool,
    pulse: PropTypes.bool,
    shake: PropTypes.bool,
    tada: PropTypes.bool,
    passing: PropTypes.bool,
    burst: PropTypes.bool,
    fast: PropTypes.bool,
    slow: PropTypes.bool,
    hover: PropTypes.bool,
    skip: PropTypes.bool
  };

  render() {
    switch(this.props.prefix) {
      default:
      case 'fa':
        let {name,size,rotate,flip,spin,fixedWidth,stack,inverse,className,prefix,wrench,ring,horizontal,vertical,flash,bounce,float,pulse,skip,shake,tada,passing,burst,fast,slow,hover}=this.props;

        if(!prefix) {
          prefix = 'fa';
        }

        var classNames = `icon ${prefix} ${prefix}-${name}`;
        if(size) {
          classNames += ` ${prefix}-${size}`;
        }
        if(rotate) {
          classNames += ` ${prefix}-rotate-${rotate}`;
        }
        if(flip) {
          classNames += ` ${prefix}-flip-${flip}`;
        }
        if(fixedWidth) {
          classNames += ` ${prefix}-fw`;
        }
        if(spin) {
          classNames += ` ${prefix}-spin`;
        }
        if(stack) {
          classNames += ` ${prefix}-stack-${stack}`;
        }
        if(inverse) {
          classNames += ` ${prefix}-inverse`;
        }
        if(skip) {
          classNames += ` ${prefix}-pulse`;
        }

        if(wrench) {
          classNames += ` faa-wrench`;
        }
        if(ring) {
          classNames += ` faa-ring`;
        }
        if(horizontal) {
          classNames += ` faa-horizontal`;
        }
        if(vertical) {
          classNames += ` faa-vertical`;
        }
        if(flash) {
          classNames += ` faa-flash`;
        }
        if(bounce) {
          classNames += ` faa-bounce`;
        }
        if(float) {
          classNames += ` faa-float`;
        }
        if(pulse) {
          classNames += ` faa-pulse`;
        }
        if(shake) {
          classNames += ` faa-shake`;
        }
        if(tada) {
          classNames += ` faa-tada`;
        }
        if(passing) {
          classNames += ` faa-passing`;
        }
        if(burst) {
          classNames += ` faa-burst`;
        }
        if(fast) {
          classNames += ` faa-fast`;
        }
        if(slow) {
          classNames += ` faa-slow`;
        }
        if(wrench || ring || horizontal || vertical || flash || bounce || float || pulse || shake || tada || passing || burst) {
          classNames += hover ? ' animated-hover' : ' animated';
        }

        if(className) {
          classNames += ` ${className}`;
        }
        return (<i {...this.props} className={classNames}/>);

      case 'glyphicon':
        return (<i {...this.props} glyph={this.props.name}/>);
    }
  }
}
