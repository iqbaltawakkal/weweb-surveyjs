import { property } from 'survey-core';

export default {
    editor: {
        label: {
            en: 'Survey',
        },
    },
    properties: {
        showLogicTab: {
            label: {
                en: 'Show logic tab',
            },
            type: 'OnOff',
            defaultValue: true,
        },
        showJSONEditorTab: {
            label: {
                en: 'Show JSON editor tab',
            },
            type: 'OnOff',
            defaultValue: true,
        },
    },
};
