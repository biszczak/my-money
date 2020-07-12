import { toast } from 'react-toastify';

const notificationsMiddleware = () => next => action => {
    if (action.successMessage && /(.*)_(SUCCESS)/.test(action.type)) {
        console.log({ action })
        toast.success(action.successMessage, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    next(action);
}

export default notificationsMiddleware;