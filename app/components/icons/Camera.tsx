import { SVGProps } from "react";

export const Camera = (props: SVGProps<SVGSVGElement>)  =>  {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24"  fill="white" xmlns="http://www.w3.org/2000/svg"
         {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71494 5.99961C5.07842 5.99961 4.46797 6.25247 4.01789 6.70255C3.5678 7.15264 3.31494 7.76309 3.31494 8.39961V17.9996C3.31494 18.6361 3.5678 19.2466 4.01789 19.6967C4.46797 20.1468 5.07842 20.3996 5.71494 20.3996H20.1149C20.7515 20.3996 21.3619 20.1468 21.812 19.6967C22.2621 19.2466 22.5149 18.6361 22.5149 17.9996V8.39961C22.5149 7.76309 22.2621 7.15264 21.812 6.70255C21.3619 6.25247 20.7515 5.99961 20.1149 5.99961H18.2117C17.8935 5.99954 17.5883 5.87307 17.3633 5.64801L16.0181 4.30281C15.5682 3.85269 14.9578 3.59975 14.3213 3.59961H11.5085C10.8721 3.59975 10.2617 3.85269 9.81174 4.30281L8.46654 5.64801C8.24155 5.87307 7.93638 5.99954 7.61814 5.99961H5.71494ZM12.9149 16.7996C13.3877 16.7996 13.8558 16.7065 14.2926 16.5256C14.7294 16.3447 15.1262 16.0795 15.4605 15.7452C15.7948 15.4109 16.06 15.014 16.2409 14.5773C16.4218 14.1405 16.5149 13.6724 16.5149 13.1996C16.5149 12.7269 16.4218 12.2587 16.2409 11.8219C16.06 11.3852 15.7948 10.9883 15.4605 10.654C15.1262 10.3197 14.7294 10.0546 14.2926 9.87364C13.8558 9.69273 13.3877 9.59961 12.9149 9.59961C11.9602 9.59961 11.0445 9.97889 10.3694 10.654C9.69423 11.3292 9.31494 12.2448 9.31494 13.1996C9.31494 14.1544 9.69423 15.0701 10.3694 15.7452C11.0445 16.4203 11.9602 16.7996 12.9149 16.7996V16.7996Z"/>
    </svg>
  );
}
