export function RepositoryItem(props){
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description ?? 'Default'}</p>

            <a href={props.repository.html_url ?? 'Default'}>
                Acessar repositório
            </a>
        </li>
    )
}