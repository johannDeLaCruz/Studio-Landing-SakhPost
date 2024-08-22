import GarsonImage from '@assets/images/case-image-01.jpg'
import SakhpostImage from '@assets/images/case-image-03.jpg'
import SendanceImage from '@assets/images/case-image-02.jpg'
import SilServiceImage from '@assets/images/case-image-03.jpg'

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
