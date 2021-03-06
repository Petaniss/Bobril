module Automata.Components.Help {
    function getHelp(caption: string, text: string): IBobrilChildren {
        return [
            {
                tag: 'div',
                style: { fontWeight: 'bold' },
                children: caption
            },
            {
                tag: 'div',
                style: { marginBottom: 10 },
                children: text
            }
        ];
    }

    var Component: IBobrilComponent = {
        render(ctx: IBobrilCtx, me: IBobrilNode, oldMe?: IBobrilCacheNode): void {
            me.tag = 'div';
            me.className = 'help';
            me.style = {
                width: 300,
                height: 480,
                marginLeft: 20,
                cssFloat: 'left',
                position: 'relative'
            };
            me.children = [
                {
                    tag: 'div',
                    style: {
                        fontSize: '1.1em',
                        fontWeight: 'bold',
                        marginBottom: 10
                    },
                    children: 'Help'
                },
                getHelp('Add new state', 'Double click on canvas'),
                getHelp('Add new transition', 'Hold Ctrl and draw line between states'),
                getHelp('Add loop', 'Hold Ctrl and draw mouse from state and back'),
                getHelp('Remove item', 'Select item and press Del'),
                getHelp('Move state', 'Drag it with mouse'),
                getHelp('Bend transition / Move loop', 'Drag its middle point'),
                getHelp('Straighten transition', 'Double click on its middle point'),
                getHelp('Move transition text', 'Drag it with mouse'),
                {
                    tag: 'div',
                    children: 'Last frame duration: ' + b.lastFrameDuration() + ' ms',
                    style: { position: 'absolute', bottom: 10 }
                }
            ];
        }
    }

    export function Get(): IBobrilNode {
        return { component: Component }
    }
}
