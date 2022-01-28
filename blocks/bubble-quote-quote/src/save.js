/**
 * External dependencies
 */
 import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps
} from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
 export default function save( { attributes } ) {
	const { align, content } = attributes;

	const classNames =
    	classnames(
        	{
        		[`has-text-align-${ align }`] : align
        	}
        );

	const blockProps = useBlockProps.save( { className: classNames } );

	return (
		<div { ...blockProps }>
			<RichText.Content value={ content } multiline="p" />
		</div>
	);
}