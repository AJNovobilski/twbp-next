import HEAD from "next/head";

export default function META(props) {
  return (
    <HEAD>
      <title>{props.title}</title>
      <meta name="title" content={props.title}></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes"/>
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={props.url}></meta>
      <meta
        name="twitter:title"
        property="og:title"
        content={props.title}
      ></meta>
      <meta property="twitter:description" content={props.desc}></meta>
      <meta property="twitter:image" content={props.image}></meta>

      <meta name="description" content={props.desc}></meta>

      <meta property="og:type" content="website" />
       <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:image" content={props.image}/>
      <meta content={props.title} property="og:site_name"/>
      <meta property="og:image:alt" content={props.url}/>
    </HEAD>
  );
}
