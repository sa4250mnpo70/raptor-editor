/**
 * @fileOverview Contains the preview revisions button code.
 * @license http://www.raptor-editor.com/license
 *
 * @author Michael Robinson <michael@panmedia.co.nz>
 * @author David Neilsen <david@panmedia.co.nz>
 * @author Melissa Richards <melissa@panmedia.co.nz>
 */

/**
 * Creates an instance of the preview button that applies content directly
 * to the element.
 *
 * @param {type} Button overrides
 */
var RevisionsPreviewButton = new Button({
    name: 'revisionsPreviewButton',
    title: _('revisionsPreviewButtonTitle'),
    text: _('revisionsPreviewButtonTitle'),

    /**
     * Bind to the revisionsPreview event so this button can be deactived when
     * another one is clicked.
     *
     * @return {RevisionsPreviewButton}
     */
    init: function() {
        this.raptor.bind('revisionsPreview', function() {
            aButtonInactive(this.button);
        }.bind(this));
        return Button.prototype.init.apply(this, arguments);
    },

    /**
     * Set the Raptor instance's html to this button instance's revision.
     * Fire event to allow other preview buttons to deactivate.
     */
    action: function() {
        this.raptor.getElement().html(this.options.revision.content);
        this.raptor.fire('revisionsPreview');
        aButtonActive(this.button);
    }

});
