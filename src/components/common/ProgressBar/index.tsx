import { FC, useEffect, useState } from "react";

// @ts-ignore
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

type Props = {
    percent: number,
    status:string,
}


const ProgressBar: FC <Props>= ({ percent, status }) => {

    const nunber= Math.round(percent )

    return (
        <div style={{width: '20rem'}}>
            <Progress percent={nunber} status={status}
            theme={
                {
                    error: {
                        symbol: '💀',
                        trailColor: 'pink',
                        color: 'red'
                    },
                    default: {
                        symbol: nunber + '%',
                        trailColor: 'lightblue',
                        color: 'blue'
                    },
                    active: {
                        symbol: '😀',
                        trailColor: 'yellow',
                        color: 'orange'
                    },
                    success: {
                        symbol: '⭐️',
                        trailColor: 'lime',
                        color: 'green'
                    }
                }
            }
            />
        </div>
    );
};

export { ProgressBar }