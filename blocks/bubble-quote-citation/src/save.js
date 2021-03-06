/**
 * External dependencies
 */
 import classnames from 'classnames';

 /**
  * WordPress dependencies
  */
 import { RichText, useBlockProps } from '@wordpress/block-editor';

 export default function save( { attributes } ) {
	 const { align, citation } = attributes;

	 const className = classnames( {
		 [ `has-text-align-${ align }` ]: align,
	 } );

	 const blockProps = useBlockProps.save( {
     		className: className,
     	} );

	 return (
		 <>
		 	{ citation && (
			<RichText.Content { ...blockProps } tagName="cite" value={ citation } />
			) }
		 </>
	 );
 }
