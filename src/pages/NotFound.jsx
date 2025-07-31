import DefaultLayout from '../Layouts/DefaultLayout';
import DefaultSection from '../Layouts/DefaultSection';
import './NotFound.css';

const meta = { title: '404 - Page Not Found - Javier Quiroga | UX & Web Dev' };

export default function NotFound() {
  return (
    <DefaultLayout pageType="not-found" meta={meta}>
      <DefaultSection>
        <svg width="256" height="256" viewBox="0 0 256 256">
          <g
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            style={{
              stroke: 'none',
              strokeWidth: 0,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: 'none',
              fillRule: 'nonzero',
              opacity: 1,
            }}
          >
            <path
              d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z M 45 4 C 22.393 4 4 22.393 4 45 s 18.393 41 41 41 s 41 -18.393 41 -41 S 67.607 4 45 4 z"
              transform="matrix(1 0 0 1 0 0)"
              strokeLinecap="round"
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                fill: '#101218',
                fillRule: 'nonzero',
                opacity: 1,
              }}
            />
            <circle
              cx="30.344"
              cy="33.274"
              r="5.864"
              transform="matrix(1 0 0 1 0 0)"
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                fill: '#101218',
                fillRule: 'nonzero',
                opacity: 1,
              }}
            />
            <circle
              cx="59.664"
              cy="33.274"
              r="5.864"
              transform="matrix(1 0 0 1 0 0)"
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                fill: '#101218',
                fillRule: 'nonzero',
                opacity: 1,
              }}
            />
            <path
              d="M 72.181 65.49 c -0.445 0 -0.893 -0.147 -1.265 -0.451 c -7.296 -5.961 -16.5 -9.244 -25.916 -9.244 c -9.417 0 -18.62 3.283 -25.916 9.244 c -0.854 0.7 -2.115 0.572 -2.814 -0.283 c -0.699 -0.855 -0.572 -2.115 0.283 -2.814 C 24.561 55.398 34.664 51.795 45 51.795 c 10.336 0 20.438 3.604 28.447 10.146 c 0.855 0.699 0.982 1.959 0.283 2.814 C 73.335 65.239 72.76 65.49 72.181 65.49 z"
              transform="matrix(1 0 0 1 0 0)"
              strokeLinecap="round"
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                fill: '#101218',
                fillRule: 'nonzero',
                opacity: 1,
              }}
            />
          </g>
        </svg>
        <h1>404 - Page not found</h1>
        <p className="large-text">Oops... you got lost</p>
      </DefaultSection>
    </DefaultLayout>
  );
}
