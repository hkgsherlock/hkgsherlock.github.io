import React, { Fragment } from 'react';

import { tel, email, addr } from "node_secret";

import { List } from 'semantic-ui-react';

export default function Contacts ({ isPrint }) {
    return (
        <List>
            <List.Item icon='phone' content={(
                <a href={`tel:${tel}`}>
                    {tel}
                </a>
            )} />
            <List.Item icon='mail' content={(
                <a href={`mailto:${email}`}>
                    {email}
                </a>
            )} />
            <List.Item icon='github' content={(
                <Fragment>
                    @
                    <a href="https://github.com/soumasandesu">
                        soumasandesu
                    </a>
                </Fragment>
            )} />
            {isPrint && (
                <List.Item icon='home' content={addr} />
            )}
        </List>
    );
};