import GarsonImage from '@assets/images/garson.png'
import SakhpostImage from '@assets/images/sakhpost.png'
import SendanceImage from '@assets/images/sendance.png'
import SilServiceImage from '@assets/images/sil-service.png'

type Card = {
    id: number
    image: string
    title: string
    subtitle: string
    description: string
}

export const cards: Card[] = [
    {
        id: 1,
        image: GarsonImage,
        title: 'garson',
        subtitle: 'платформа',
        description:
            'равным образом укрепление и развитие структуры играет важную роль в формировании систем массового участия',
    },
    {
        id: 2,
        image: SendanceImage,
        title: 'sendance',
        subtitle: 'лендинг',
        description:
            'равным образом укрепление и развитие структуры играет важную роль в формировании систем массового участия',
    },
    {
        id: 3,
        image: SakhpostImage,
        title: 'sakhpost',
        subtitle: 'портал',
        description:
            'равным образом укрепление и развитие структуры играет важную роль в формировании систем массового участия',
    },
    {
        id: 4,
        image: SilServiceImage,
        title: 'sil service',
        subtitle: 'сервис',
        description:
            'равным образом укрепление и развитие структуры играет важную роль в формировании систем массового участия',
    },
]
